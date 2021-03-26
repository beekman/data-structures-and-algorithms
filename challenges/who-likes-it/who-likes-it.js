// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes[]; // must be "no one likes this"
// likes["Peter"]; // must be "Peter likes this"
// likes["Jacob", "Alex"]; // must be "Jacob and Alex like this"
// likes["Max", "John", "Mark"]; // must be "Max, John and Mark like this"
// likes["Alex", "Jacob", "Mark", "Max"]; // must be "Alex, Jacob and 2 others like this"

export let likes = (names) => {
    return {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)];
};
