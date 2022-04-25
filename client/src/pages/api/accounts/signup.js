import { API_URL } from "../../../config";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password, re_password } = req.body;

    const body = JSON.stringify({ name, email, password, re_password });

    try {
      const apiRes = await fetch(`${API_URL}/auth/users/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });
      const data = await apiRes.json();
      if (apiRes.status === 201) {
        return res.status(201).json({ success: data });
      } else {
        return res.status(apiRes.status).json({ error: data });
      }
    } catch (err) {
      return res.status(500).json({ error: "Next Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `Method ${req.status} is not allowed` });
  }
};
