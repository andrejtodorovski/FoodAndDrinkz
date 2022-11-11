public class TransferAttributesFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String[]pom=input.split(",",-1);
        if (pom[4].toLowerCase().contains("restaurant") || pom[4].toLowerCase().contains("bar") ||
        pom[4].toLowerCase().contains("cafe")) {
            String[] attr = pom[4].split(" ");
            StringBuilder tmp = new StringBuilder();
            for (String s : attr) {
                if (!s.equalsIgnoreCase("restaurant") &&
                        !s.equalsIgnoreCase("bar") && !s.equalsIgnoreCase("cafe")) {
                    tmp.append(s).append(" ");
                }
                if (s.equalsIgnoreCase("restaurant")) {
                    pom[4] = "Restaurant";
                }
                if (s.equalsIgnoreCase("bar")) {
                    pom[4] = "Bar";
                }

            }
            StringBuilder sb = new StringBuilder();
            pom[5] = String.valueOf(sb.append(pom[5]).append(";").append(tmp.toString().trim()));
            return String.join(",",pom);
        }
        else {
            if(pom[4].equalsIgnoreCase("category")) {
                return input;
            }
            else {
                return "delete";
            }
        }

    }
}
