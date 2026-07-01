
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env['RESEND_API_KEY']!);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Método no permitido'
    });
  }

  try {
    const { name, email, service, message } = req.body;

    await resend.emails.send({
      from: 'POLUS <onboarding@resend.dev>',
      to: 'Polus.Soporte@hotmail.com',
      subject: 'Nuevo contacto desde POLUS',
      html: `
        <h2>Nuevo mensaje</h2>

        <p><strong>Nombre:</strong> ${name}</p>

        <p><strong>Correo:</strong> ${email}</p>

        <p><strong>Servicio:</strong> ${service}</p>

        <p><strong>Mensaje:</strong></p>

        <p>${message}</p>
      `
    });

    return res.status(200).json({
      success: true
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false
    });

  }
}