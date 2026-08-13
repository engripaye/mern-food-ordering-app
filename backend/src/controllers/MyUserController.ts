import { Request, Response } from "express";
import User from "../model/user";

const getCurrentUser = async (req: Request, res: Response) => {
  const auth0Id = getAuth0Id(req);

  if (!auth0Id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try{
    const currentUser = await User.findOne({ auth0Id });
    if (!currentUser) {
      return res.status(401).json({ message: "User not found" });
    }

    res.json(currentUser);
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Something went wrong"});
  }
}

const getAuth0Id = (req: Request) => req.auth?.payload.sub;

const createCurrentUser = async (req: Request, res: Response) => {
  const auth0Id = getAuth0Id(req);

  if (!auth0Id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User({ auth0Id, email });
    await newUser.save();

    return res.status(201).json(newUser.toObject());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  const auth0Id = getAuth0Id(req);

  if (!auth0Id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { name, addressLine1, city, country } = req.body;
    const user = await User.findOne({ auth0Id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;
    await user.save();

    return res.json(user.toObject());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating user" });
  }
};

export default {
  getCurrentUser,
  createCurrentUser,
  updateCurrentUser,
};
