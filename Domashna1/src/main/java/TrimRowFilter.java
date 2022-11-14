public class TrimRowFilter implements Filter<String> {
    @Override
    public String execute(String input) {
        if (!input.equalsIgnoreCase("delete"))
            return input.substring(0,input.length()-1);
        return input;
    }
}
