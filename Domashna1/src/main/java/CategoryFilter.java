public class CategoryFilter implements Filter<String>{
    String category;
    public CategoryFilter(String category) {
        this.category = category;
    }

    @Override
    public String execute(String input) {
        String[]pom=input.split(",",-1);
        if(pom[3].trim().strip().equalsIgnoreCase(category)){
            return input;
        }
        return "delete";
    }
}
