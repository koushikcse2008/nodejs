const PageContent = require("./page-content.model");

const createPageContent = async (newContent) => {
    try {
        return await new PageContent(newContent).save(); 
    } catch (error) {
        throw error;
    }
}

const listPageContent = async () => {
    try {
        return await PageContent.find();
    } catch (error) {
        throw error;
    }
}

const editPageContent = async (editId) => {
    try {
        return await PageContent.findById(editId);
    } catch (error) {
        throw error;
    }
}

const updatePageContent = async (updateContent) => {
    try {
        await PageContent.findOneAndUpdate(
            { _id: updateContent._id },
            { 
                page_title: (updateContent.page_title != "") ? updateContent.page_title : '',  
                page_content1: (updateContent.page_content1 != "") ? updateContent.page_content1 : '', 
                page_content2: (updateContent.page_content2 != "") ? updateContent.page_content2 : '', 
                page_img1: (updateContent.page_img1 != "") ? updateContent.page_img1 : '', 
                page_img2: (updateContent.page_img2 != "") ? updateContent.page_img2 : '', 
            },
            { new: false }
        );
        return PageContent.find();
    } catch {

    }
}

const deletePageContent = async (delId) => {
    try {
       return await PageContent.findByIdAndDelete(delId);
    } catch (err) {
        throw err;
    };
}

module.exports = {
    createPageContent,
    listPageContent,
    editPageContent,
    updatePageContent,
    deletePageContent
}





