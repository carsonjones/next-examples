import data from '../../public/questions.json';
export default (req, res) => {
  switch (req.method) {
    case 'GET':
      const question = data[Math.floor(Math.random() * data.length)];
      res.status(200).json({
        message: question,
      });
    default:
      res.status(405).end() //Method Not Allowed
      break;
  }
};