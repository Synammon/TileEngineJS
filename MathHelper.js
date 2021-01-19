class MathHelper {
    static clamp(value, lower, upper) {
        var response = value;
        
        if (value < lower)
            response = lower;

        if (value > upper)
            response = upper;

        return response;
    }
}
