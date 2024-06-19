import { handleError, handleSuccess } from "@/lib/middleware/response-message";
import prisma from "@/lib/prisma";

export async function GET(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    return handleSuccess(users, 200);
  } catch (error) {
    return handleError(error, 500);
  }
}
