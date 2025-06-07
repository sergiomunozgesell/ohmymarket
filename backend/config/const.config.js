export const session = ['username', 'password'];

export const cookieUserName = "userToken";

export const tokenOptions =
{
    expiresIn:"1d"
}

export const cookieOptions =
{
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000 // 1 día
}
                