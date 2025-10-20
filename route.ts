if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY missing. Set it in your environment.");
  }