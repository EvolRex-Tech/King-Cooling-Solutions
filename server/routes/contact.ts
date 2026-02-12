import { RequestHandler } from "express";

// Contact form now uses FormSubmit.co - this endpoint is no longer needed
// but keeping for backward compatibility or future use
export const handleContact: RequestHandler = (req, res) => {
  res.status(200).json({ message: "Contact form is now handled by FormSubmit.co" });
};
