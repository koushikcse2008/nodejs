const ex = require("express");
// const { route } = require("express/lib/application"); 
const Course = require("../models/course");
const router = ex.Router();

//get all courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch(error) {
        res.json(error);
    }
});

//get single course
router.get("/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const details = await Course.findById(courseId);
        res.json(details);
    } catch (error) {
        res.json(error);
    }
});

//create single course
router.post("/", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.json(course);
    } catch (error) {
        res.json(error);
    }
});

//delete course
router.delete("/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const details = await Course.remove({"_id": courseId});
        res.json(details);
    } catch (error) {
        res.json(error);
    }
});

//update course
router.put("/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const details = await Course.updateOne(
                                                {"_id": courseId}, 
                                                req.body
                                            );
        res.json(details);
    } catch (error) {
        res.json(error);
    }
});


module.exports = router
