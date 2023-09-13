import Booking from "../models/Booking.js";

// create new booking
export const createBooking = async (req, res) => {
//   console.log(req.body);
  var obj = req.body;
  obj.phone = parseInt(req.body.phone);
  obj.guestSize = parseInt(req.body.guestSize);
  const newBooking = new Booking(obj);
//   console.log(obj);

  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Your tour not booked ,internal server error ",
    });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "success",
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found ",
      data: savedBooking,
    });
  }
};

// get All booking
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({
      success: true,
      message: "success",
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error ",
      data: savedBooking,
    });
  }
};
