public class FixTimesFilter implements Filter<String>{

    @Override
    public String execute(String input) {
        return input.replace("a.m.", "AM").replace("p.m","PM").replace("Open 24 hours","12AM-12AM");
    }
}
