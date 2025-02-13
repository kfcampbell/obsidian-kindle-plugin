import { santizeTitle, br2ln } from '~/utils';

describe('Santize title for Obsidian environment', () => {
  it('strip book description in title after colon', () => {
    const santizedTitle = santizeTitle(
      'Book Yourself Solid: The Fastest, Easiest, and Most Reliable System for Getting More Clients Than You Can Handle Even if You Hate Marketing and Selling'
    );
    expect(santizedTitle).toEqual('Book Yourself Solid');
  });

  it('remove reserved characters — single quote', () => {
    const santizedTitle = santizeTitle(
      "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change"
    );
    expect(santizedTitle).toEqual('The Managers Path');
  });

  it('remove reserved characters — single quote with other special characters', () => {
    const santizedTitle = santizeTitle(
      'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
    );
    expect(santizedTitle).toEqual('Rich Dad Poor Dad');
  });

  it('remove any title content inside brackets', () => {
    const santizedTitle = santizeTitle(
      'The Discipline of Teams (Harvard Business Review Classics)'
    );
    expect(santizedTitle).toEqual('The Discipline of Teams');
  });

  it('trims any leading or trailing spaces', () => {
    const santizedTitle = santizeTitle(' The Warm-Hearted Snowman ');
    expect(santizedTitle).toEqual('The Warm-Hearted Snowman');
  });
});

describe('HTML breakline to new line', () => {
  it('replaces breakline elements with no spaces', () => {
    const actual = br2ln('hello<br/>there');
    expect(actual).toEqual('hello\nthere');
  });

  it('replaces breakline elements with spaces', () => {
    const actual = br2ln('hello<br  />there');
    expect(actual).toEqual('hello\nthere');
  });

  it('returns string with no breaklines', () => {
    const actual = br2ln('hello there');
    expect(actual).toEqual('hello there');
  });

  it('handles null', () => {
    const actual = br2ln(null);
    expect(actual).toEqual(null);
  });

  it('handles undefined', () => {
    const actual = br2ln(undefined);
    expect(actual).toEqual(undefined);
  });
});
