class Github {
  constructor() {
    this.client_id = '282aab9db6eb77c3ee6f';
    this.client_secret = 'a2cd01450736fead649ecd013a1de3231f4c17ca';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}