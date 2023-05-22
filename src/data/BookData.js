

 const getLocalData = () => {
    const Books = localStorage.getItem("Books");
    if (Books) {
      return JSON.parse(Books);
    } else {
      return [];
    }
  };

export default getLocalData;