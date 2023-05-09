const { posTemp } = require("../Controllers/temperaments.control");

const getTemperaments = async (req, res) => {
  try {
    const temps = await posTemp();
    res.status(200).json(temps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getTemperaments;
