export default async (req, res) => {
  let { email, password } = req.body;
  try {
    res.status(200).json({ email, password, isSuccess: true });
  } catch (error) {
    console.error(error);
    res.status(503).send();
  }
};
