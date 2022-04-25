import cookie from "cookie";

import { API_URL } from "../../../config";

export default async (req, res) => {
  if (req.method === "GET") {
    const cookies = cookie.parse(req.headers.cookie ?? "");
    const access = cookies.access ?? false;
    if (access === false) {
      return res.status(401).json({
        error: "Unable to fetch user data",
      });
    }
    try {
      const apiRes = await fetch(`${API_URL}/auth/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access}`,
        },
      });
      const user = await apiRes.json();
      if (apiRes.status === 200) {
        return res.status(200).json({
          user: user,
        });
      } else {
        return res.status(apiRes.method).json({
          error: "somthing went wrong",
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({
      error: "Method `${req.method}` is not allowed",
    });
  }
};
