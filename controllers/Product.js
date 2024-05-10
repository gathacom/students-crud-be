import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const index = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await prisma.student.findUnique({ where: { id: Number(id) } });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const create = async (req, res) => {
  const { name, nim } = req.body;
  try {
    const student = await prisma.student.create({
      data: {
        name: name,
        nim: nim,
      },
    });
    res.status(200).json({
        student,
        message: "Data Created Successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
    const { name, nim } = req.body;
    const { id } = req.params;
  try {
    const student = await prisma.student.update({
      where: {
        id: Number(id),
      },
        data: {
        name: name,
        nim: nim,
      },
      
    });
    res.status(200).json({
      student,
      message: "Data Updated Successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const destroy = async (req, res) => {
    const { id } = req.params;
  try {
    const student = await prisma.student.delete({
      where: {
        id: Number(id),  
      },
    });
    res.status(200).json({
        student,
        message: "Data Deleted Successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
