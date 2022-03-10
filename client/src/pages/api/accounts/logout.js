import { API_URL } from "../../../config";
import cookie from "cookie";

export default async (req, res) => {
  if (req.method === "POST") {
    req.setHeaders("Set-Cookie", [
      cookie.serialize("access", "", {
        httpOnly: true,
        secure: NODE !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/api/",
      }),
      cookie.serialize("refresh", "", {
        httpOnly: true,
        secure: NODE !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/api/",
      }),
    ]);
    return req.status(200).json({
      success: "User logout successfully",
    });
  } else {
    req.setHeaders("Allow", ["POST"]);
    return res.status(405).json({
      error: `Method ${res.method} is not allowed`,
    });
  }
};
