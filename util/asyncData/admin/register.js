async function registerCreateUserDocument(uid, name, email) {
  let path = name.trim()
  path = path.replace(/\s+/g, '-').toLowerCase()

  try {
      await this.$fire.firestore.collection('users').doc(uid).set({
      name,email, role: 'admin' })
  } catch (e) {
      alert(e)
  }
};

export { registerCreateUserDocument };
