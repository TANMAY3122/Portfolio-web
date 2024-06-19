import { NextResponse } from "next/server";

export function handleError(message: any, status = 500) {
  return NextResponse.json(
    {
      success: false,
      message: message,
    },
    { status }
  );
}

export function handleSuccess(data: any, message: any, status = 200) {
  return NextResponse.json(
    {
      data,
      success: true,
      message: message,
    },
    { status }
  );
}
