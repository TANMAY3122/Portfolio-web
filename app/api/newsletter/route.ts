import EmailTemplate from "@/components/ui/email-template";
import { handleError, handleSuccess } from "@/lib/middleware/response-message";
import prisma from "@/lib/prisma";
import { createTransporter } from "@/lib/transporter";

export async function POST(req: Request, res: Response) {
  const { email } = await req.json();

  if (!email) {
    return handleError("Email is required", 400);
  }

  try {
    await prisma.user.create({
      data: {
        email,
      },
    });

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome to our newsletter",
      html: EmailTemplate(),
    };

    await transporter.sendMail(mailOptions);

    return handleSuccess("Subscribed to our newsletter", 201);
  } catch (error) {
    return handleError(error, 500);
  }
}
