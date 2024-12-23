export const postUser = (req, res) => {
  try {
    const message = "asdadasda";
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
