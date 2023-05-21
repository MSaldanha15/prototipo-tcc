import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import Filter from "./filter.js";
import Users from "./database.js";
import firebaseApp from "./services/firebase.js"
import { getFirestore, addDoc, collection } from "firebase/firestore";

dotenv.config();
const configration = new Configuration({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configration);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {

  const db = getFirestore(firebaseApp);

  try {
    const question = req.body.question;
    const filter = Filter(req.body.filter);
    const date = new Date()
    

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Você é o Educai, Inteligencia articifical da Unicarioca. 
      ${filter}
      ${question}`,
      temperature: 0.25, // Higher values means the model will take more risks.
      max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    });
    res.status(200).send({
      bot: response.data.choices[0].text,
    });

    try {
      await addDoc(collection(db, "sessao"),{
        pergunta: question,
        resposta: response.data.choices[0].text,
        filtro: filter,
        dateTime: date
      })
    } catch (error) {
      console.log(error);
    }

  } catch (error) {
    res.status(500).send(error || "Algo deu errado");
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Aqui você pode fazer a validação das informações de login,
  // por exemplo, comparando com informações armazenadas em um banco de dados

  let aux = false;

  Users.forEach((user) => {
    if (email === user.email && password === user.password) {
      aux = true;
    }
  });

  if (aux === true) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(8000, () => {
  console.log("Backend Funcionando!");
});
