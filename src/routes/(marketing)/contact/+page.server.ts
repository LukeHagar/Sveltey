// import { Resend } from 'resend';

// import { RESEND_API_KEY } from '$env/static/private';

// const resend = new Resend(RESEND_API_KEY);

// export const actions = {
//   sendEmail: async ({ request }) => {
//     const formData = await request.formData();
//     const email = formData.get('email');
//     const message = formData.get('message');

//     try {
//       await resend.emails.send({
//         from: 'your-email@example.com',
//         to: 'recipient@example.com',
//         subject: 'New Contact Form Submission',
//         text: `Email: ${email}\nMessage: ${message}`,
//       });
//       return { success: true };
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return { success: false, error: 'Failed to send email' };
//     }
//   }
// };
