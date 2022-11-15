import java.io.*;
import java.util.HashSet;
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
        pipe.addFilter(new RemoveColumnsOfChoiceFilter(new int[]{0}));
        pipe.addFilter(new FixTimesFilter());
        pipe.addFilter(new TrimRowFilter());
        BufferedReader bufferedReader=new BufferedReader(new InputStreamReader(new FileInputStream("Domashna1/src/main/resources/raw_data.csv")));
        File f=new File("Domashna1/src/main/resources/filtered_data.csv");
        PrintWriter printWriter=new PrintWriter(f);
        String pom=bufferedReader.readLine();
        HashSet<String> stringHashSet = new HashSet<>();
        while((pom!=null)){
            String p=pipe.runFilter(pom);
            if(!Objects.equals(p, "delete")){
                String[] tmp = p.split(",",-1);
                if(!stringHashSet.contains(tmp[0])) {
                    stringHashSet.add(tmp[0]);
                    printWriter.println(p);
                }
            }
            pom=bufferedReader.readLine();
        }
        printWriter.flush();
        printWriter.close();
        // Split into separate csv files
        Pipe<String> restaurantsPipe = new Pipe<>();
        Pipe<String> barsPipe = new Pipe<>();
        Pipe<String> cafesPipe = new Pipe<>();
        restaurantsPipe.addFilter(new CategoryFilter("restaurant"));
        barsPipe.addFilter(new CategoryFilter("bar"));
        cafesPipe.addFilter(new CategoryFilter("cafe"));
        File restaurantsFile=new File("Domashna1/src/main/resources/filtered_restaurants.csv");
        File barsFile=new File("Domashna1/src/main/resources/filtered_bars.csv");
        File cafesFile=new File("Domashna1/src/main/resources/filtered_cafes.csv");
        PrintWriter restaurantsPrintWriter = new PrintWriter(restaurantsFile);
        PrintWriter barsPrintWriter = new PrintWriter(barsFile);
        PrintWriter cafesPrintWriter = new PrintWriter(cafesFile);
        BufferedReader restaurantsBufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream("Domashna1/src/main/resources/filtered_data.csv")));
        BufferedReader barsBufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream("Domashna1/src/main/resources/filtered_data.csv")));
        BufferedReader cafesBufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream("Domashna1/src/main/resources/filtered_data.csv")));
        runPipe(cafesPipe,cafesBufferedReader,cafesPrintWriter);
        runPipe(restaurantsPipe,restaurantsBufferedReader,restaurantsPrintWriter);
        runPipe(barsPipe,barsBufferedReader,barsPrintWriter);

    }

    public static void runPipe(Pipe<String> pipe, BufferedReader bufferedReader, PrintWriter printWriter) throws IOException {
        String pom = bufferedReader.readLine();
        printWriter.println(pom);
        while (pom!=null){
            String p = pipe.runFilter(pom);
            if(!Objects.equals(p, "delete")){
                printWriter.println(p);
            }
            pom=bufferedReader.readLine();
        }
        printWriter.flush();
        printWriter.close();
    }
}
