import vine from '@vinejs/vine'

export const createSpaceValidator = vine.create({
  name: vine.string().maxLength(30).nullable(),
  type: vine.enum(['ROOM', 'DM', 'GROUP_DM']),
  avatar: vine.string().url(),
})
