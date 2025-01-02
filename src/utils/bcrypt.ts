import * as bcrypt from 'bcrypt';

export async function createHashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hashPassoword = await bcrypt.hash(password, salt);
  return hashPassoword;
}

export async function passwordCompare(password: string, hashPassoword: string) {
  {
    const isMatch = await bcrypt.compare(password, hashPassoword);
    return isMatch;
  }
}
