import { type Request, type Response } from "express";
import supabase from "../database/supabase";
import { BadRequestError } from "../utils/Error";
import logger from "../utils/logger";
export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Username or Password must be required.");
  }
  const { data: userId, error: userError } = await supabase
    .from("user_profiles")
    .select("id")
    .eq("username", username)
    .single();

  if (userError || !userId) {
    throw new BadRequestError("Invalid username or password");
  }
  const {
    data: { user },
    error: UserError,
  } = await supabase.auth.admin.getUserById(userId.id);
  if (!user || !user.email) {
    throw new BadRequestError("Cannot find user");
  }
  const { data: LoginData, error: LoginError } =
    await supabase.auth.signInWithPassword({
      email: user?.email,
      password: password,
    });

  if (LoginError) {
    throw new Error(LoginError.message);
  }
  res.status(200).json({
    token: LoginData.session.access_token,
  });
}
