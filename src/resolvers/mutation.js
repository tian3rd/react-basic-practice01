module.exports = {
  newNote: async (parent, args, { models }) => {
    return await models.Note.create({
      content: args.content,
      author: 'Unknown'
    });
  },
  updateNote: async (parent, { content, id }, { models }) => {
    return await models.Note.findOneAndUpdate(
      { _id: id },
      { $set: { content } },
      { new: true }
    );
  },
  deleteNote: async (parent, { id }, { models }) => {
    try {
      // findOneAndRemove vs findOneAndDelete?
      await models.Note.findOneAndRemove({ _id: id });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
};
