global.fetch = async (url, config) => {
  return {
    json: async () => {
      return { summary: "dfg" };
    },
  };
};
