import { handleError, handleSuccess } from "@/lib/middleware/response-message";
import prisma from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  
  try {

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return handleSuccess("User deleted", 200);
  } catch (error) {
    return handleError(error, 500);
  }
}
