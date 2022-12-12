interface File {
  id:number;
  file:string; //url
  nameOfFile: string;
}

  
  function handleGetAllFiles() {
    getAllFiles();
  }
  
  async function getAllFiles() {
    try {
      // @ts-ignore
      const { data } = await axios.get("/api/get-files");
  
      const { files, error } = data;
      if (error) throw new Error(error);
  
      render(files);
    } catch (err: any) {
      console.error(err);
    }
  }
  
  async function handleDeleteFile(ev) {
    try {
      // send to server the Id of the user that we wnat to delete
      // @ts-ignore
      const { data } = await axios.delete('/api/delete-file', { data: { fileId } });
  
      const { files, error } = data;
      if (error) throw new Error(error);
  
      render(files);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  async function handleAddFile(ev:any){
    try {
      ev.preventDefault();
  
      const name = ev.target.elements.name.value;
      const file = ev.target.elements.file.value;
  
      if(!name || !file) throw new Error("Name and file are required");
  
      // @ts-ignore
      const { data } = await axios.post('/api/add-file', { name, file });
  
      const { files, error } = data;
      if (error) throw new Error(error);
  
      render(files);
      
    } catch (error) {
      console.error(error);
    }
  }
  
  
  // renders
  
  // function renderFile(file: File) {
  //   const root: any = document.querySelector("#root");
  
  //   root.innerHTML = `${file.name} is a file of: ${file.file}`;
  // }
  
  function render(users: Array<File>) {
    const root: any = document.querySelector("#root");
  
    let html = "";
    files.forEach((file) => {
      html += `<p> ${file.name} is a file of: ${file.file} <button onclick="handleDeleteFile('${file.id}')">DELETE</button></p>`;
    });
    root.innerHTML = html;
  }
  

  
  