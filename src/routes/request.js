const express = require('express');
const requestRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const { ConnectionRequestModel } = require("../models/connectionRequest");
const User = require("../models/user");

requestRouter.post("/request/send/:status/:toUserId", userAuth, async (req, res) => {
    try {
        const fromUserId = req.user._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;

      

        //Status Check
        const allowedStatus = ["ignored", "accepted", "rejected", "interested in"];
        if (!allowedStatus.includes(status)) {
          return res.status(400).json({message: "Invalid Status type: " + status});
        }

        //toUser exist check
        const toUser = await User.findById(toUserId);
        if (!toUser) {
          return res.status(400).json({
          message: "User not found",
          success: false,
          });
        }

        //Existing user exist check
        const existingConnectionRequest = await ConnectionRequestModel.findOne({
          $or: [
            { fromUserId, toUserId },
            { fromUserId: toUserId, toUserId: fromUserId },
          ],
        });
        // console.log(existingConnectionRequest);
        if (existingConnectionRequest) {
          throw new Error("Already sent the connection request before");
        }


        const connectionRequest = new ConnectionRequestModel({
            fromUserId,
            toUserId,
            status,
        });


        const data = await connectionRequest.save();

        res.json({
            message: req.user.firstName+" "+status+ " " + toUser.firstName,
            data,
        });

    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
});

module.exports = requestRouter;