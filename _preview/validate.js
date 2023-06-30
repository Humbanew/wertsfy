let extractor = JSON.parse("./wsfy.config.json", (err, data) => {
  if(err) throw err;
  return data;
});
console.log(extractor);
