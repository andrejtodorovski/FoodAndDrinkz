import java.io.*;
import java.util.Objects;

public class PipeAndFilter {
    public static void main(String[] args) throws IOException {
        Pipe<String>pipe=new Pipe<>();
        pipe.addFilter(new RemoveCommasFromAdressFilter());
        int[] listColumns={1,8,18,17,20,23};
        pipe.addFilter(new RemoveColumnsOfChoiceFilter(listColumns));
        pipe.addFilter(new RenameCafeCategoryFilter());
        pipe.addFilter(new RefactorAttributesFilter());
        pipe.addFilter(new TransferAttributesFilter());
        pipe.addFilter(new RemoveNullFilter());
        BufferedReader bufferedReader=new BufferedReader(new InputStreamReader(new FileInputStream("C:\\Users\\andre\\Downloads\\DIANS_Domasna1\\DIANS_Domasna1\\src\\main\\resources\\raw_data.csv")));
        File f=new File("C:\\Users\\andre\\Downloads\\DIANS_Domasna1\\DIANS_Domasna1\\src\\main\\resources\\filtered_data.csv");
        PrintWriter printWriter=new PrintWriter(f);
        String pom=bufferedReader.readLine();
        while((pom!=null)){
            String p=pipe.runFilter(pom);
            if(!Objects.equals(p, "delete")){
                printWriter.println(p);
            }
            pom=bufferedReader.readLine();
        }
        printWriter.flush();
        printWriter.close();
    }
}
