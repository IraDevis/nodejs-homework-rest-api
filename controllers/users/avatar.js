const { User } = require('../../db/userModel')
const fs = require('fs').promises
const path = require('path')
const Jimp = require('jimp')

const avatarController = async (req, res, next) => {
  try {
    const [extension] = req.file.originalname.split('.').reverse()
    const filename = `${req.user._id}.${extension}`

    const jimpImage = await Jimp.read(req.file.path)
    await jimpImage.resize(250, 250).writeAsync(req.file.path)

    await fs.rename(req.file.path,
      path.join(__dirname, '../../public/avatars/', filename))

    await User
      .findByIdAndUpdate(req.user._id, { avatarURL: `/avatars/${filename}` }, { new: true })

    res.status(200).json({
      message: 'Change successful'
    })
  } catch (error) {
    await fs.unlink(req.file.path)
    next(error)
  }
}

module.exports = {
  avatarController
}
