export const errorHandler = (error, req, res, next) => {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  };