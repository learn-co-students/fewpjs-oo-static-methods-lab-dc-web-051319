class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-' ]+/g, '');
    }

    static titleize(word) {
        return word.split(' ').map(w => {
            if (word.indexOf(w) == 0) {
                return this.capitalize(w);
            }
            else if (w !== "the" && w !== "a" && w !== "an" && w !== "but" && w !== "of"
                && w !== "and" && w !== "for" && w !== "at" && w !== "by" && w !== "from") {
                return this.capitalize(w);
            } else {
                return w;
            }
        }).join(' ');
    }
}
