import axios from "axios";

export const getImages = async (searchTerm = "technology") =>
  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
      Authorization: "XmFDduyx86FhPmmm9faYdbOQyoAnbjANkpNsPOqUy11O2fa5OqSDW9JP",
    },
  });

  //XmFDduyx86FhPmmm9faYdbOQyoAnbjANkpNsPOqUy11O2fa5OqSDW9JP