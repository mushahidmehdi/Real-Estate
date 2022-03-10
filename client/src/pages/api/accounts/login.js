import { API_URL, NODE } from "../../../config";
import cookie from "cookie";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const body = JSON.stringify({ email, password });
    try {
      const apiRes = await fetch(`${API_URL}/auth/jwt/create`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.ok && apiRes.status === 200) {
        res.setHeader("Set-Cookie", [
          cookie.serialize("access", data.access, {
            httpOnly: true,
            secure: NODE !== "development",
            maxAge: 30 * 60,
            sameSite: "strict",
            path: "/api/",
          }),
          cookie.serialize("refresh", data.refresh, {
            httpOnly: true,
            secure: NODE !== "development",
            maxAge: 60 * 60 * 24,
            sameSite: "strict",
            path: "/api/",
          }),
        ]);
        return res.status(200).json({ success: "Loggin Successfully" });
      } else {
        return res.status(apiRes.status).json({ error: data });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Something went wrong while authenticating" });
    }
  } else {
    req.headers("Allow", ["POST"]);
    return res.status(405).json({
      error: `method ${req.method} is not allowed`,
    });
  }
};
