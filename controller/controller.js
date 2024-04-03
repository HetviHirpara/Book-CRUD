const books = require("../model/book");

let data  = []

const indexdoc =async  (req , res) =>{
    
    try {
        let book =await books.find();
        console.log(book);
        
        res.render('index' , {book});
    } catch (error) {
        console.log(error);
    }
   
};

const getView = (req, res) =>{
    
    res.render('view' );
};

const appDoc =  (req , res) =>{
  
    console.log(req.body);
    
    const newbook = new books({
        text: req.body.text,
        author : req.body.author,
        no : req.body.no
    });

    console.log( newbook);
    newbook.save();
 
    res.redirect('/');
}

const deleteDoc =async (req ,res) =>{
    console.log("delete data..",req.params);

    try{
        const deletes =await books.findByIdAndDelete(req.params.id);
        console.log('detleed');
        res.redirect('/');
    }
    catch(err){
        console.log(err);
    }
};

const editDoc = async (req, res) => {
    
    try {
        const editData = await books.findById(req.params.id);
        console.log("EditData", editData);
        res.render('edit', { editData });
    } catch (err) {
        console.log("Error", err);
    }
}

const updateDoc = async (req, res) => {
    console.log(req.body);
    
    const {id,text,author,no} = req.body;

    try {
        const updatedDoc = await books.findByIdAndUpdate(id ,{text:text , author:author ,no:no });
        console.log("Updated Book:", updatedDoc);
        res.redirect('/');
    } catch (err) {
        console.error("Error:", err);
    }
};



module.exports = {indexdoc ,getView , appDoc  ,deleteDoc ,editDoc ,updateDoc}

