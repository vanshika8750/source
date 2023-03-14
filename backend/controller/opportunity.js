const Opportunity = require("../models/opportunity");

//middleware for getting all record by email of patron
exports.getEmailId = (req, res, next, id) => {
  Opportunity.find({ posted_by_email: id }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB BY ID",
      });
    }

    req.profile = user;
    next();
  });
};

//all opportunities posted by the patron
exports.getAllOpportunity = (req, res) => {
  return res.json(req.profile);
};

//middlware for getting opportunity by opportunity id
exports.getOpportunityId = (req, res, next, id) => {
  Opportunity.findById(id).exec((err, result) => {
    if (err || !result) {
      return res.status(400).json({
        error: "No user was found in DB BY ID",
      });
    }

    req.profile = result;
    next();
  });
};

//create opportunity by patron
exports.createOpportunity = (req, res) => {
  const opportunity = new Opportunity(req.body);

  opportunity.save((err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: " Not able to save user in DB",
      });
    }

    res.json({
      posted_by_email: result.posted_by_email,
      id: result._id,
    });
  });
};

exports.updateOpportunity = (req, res) => {
  console.log(req.body);
  Opportunity.findByIdAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true, useFindAndModify: false }, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: "You are not authorized to update this.",
      });
    }
    result.salt = undefined;
    result.encry_password = undefined;
    res.json(result);
  });
};

exports.removeOpportunity = async (req, res) => {
  const id = req.params.opportunityId;

  if (!id) {
    return res.status(404).json({
      status: "fail",
      message: "Please provide an opportunityId in the params!",
    });
  }

  const opportuity = await Opportunity.findById(id);

  if (opportuity === {}) {
    return res.status(404).json({
      status: "fail",
      message: "Opportunity not found with this Id!",
    });
  }

  for (const app of opportuity.applied_by) {
    const index = opportuity.applied_by.indexOf(app);
    if (app.emailid === req.body.emailid) {
      const index = opportuity.applied_by.map((el) => el.emailid).indexOf(req.body.emailid);
      opportuity.applied_by.splice(index, 1);
      break;
    }

    if (index <= opportuity.applied_by.length - 1) {
      return res.status(400).json({
        status: "fail",
        message: "You have not applied!",
      });
    }
  }

  await opportuity.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    data: opportuity,
  });
};

exports.applyOpportunity = async (req, res) => {
  const id = req.params.opportunityId;

  if (!id) {
    return res.status(404).json({
      status: "fail",
      message: "Please provide an opportunityId in the params!",
    });
  }

  const opportuity = await Opportunity.findById(id);

  if (opportuity === {}) {
    return res.status(404).json({
      status: "fail",
      message: "Opportunity not found with this Id!",
    });
  }

  for (const app of opportuity.applied_by) {
    if (app.emailid === req.body.emailid) {
      return res.status(400).json({
        status: "fail",
        message: "You have already applied!",
      });
      break;
    }
  }

  opportuity.applied_by.push(req.body);

  await opportuity.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    data: opportuity,
  });

  // Opportunity.findByIdAndUpdate({ _id: req.profile._id }, { $push: req.body }, { new: true, useFindAndModify: false }, (err, result) => {
  //   if (err) {
  //     return res.status(400).json({
  //       error: "You are not authorized to update this.",
  //     });
  //   }
  //   result.salt = undefined;
  //   result.encry_password = undefined;
  //   res.json(result);
  // });
};

//added by Gokul Suthar
exports.getAllOpportunities = async (req, res) => {
  const opportunities = await Opportunity.find({});
  // console.log(opportunities === []);
  if (opportunities === []) {
    return res.status(404).json({
      status: "success",
      message: "There is no user found on the server!",
    });
  }

  res.status(200).json({
    status: "success",
    data: opportunities,
  });
};
