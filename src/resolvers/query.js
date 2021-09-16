module.exports = {
  notes: async (parent, args, { models }) => {
    //   don't I need to import models first?
    return await models.Note.find();
  },
  note: async (parent, args, { models }) => {
    return await models.Note.findById(args.id);
  }
};
