import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        int[] dist = new int[3];
        
        while(true) {
        	
	        dist[0] = Integer.parseInt(st.nextToken());
	        dist[1] = Integer.parseInt(st.nextToken());
	        dist[2] = Integer.parseInt(st.nextToken());
	        
        
	        if(dist[0] == 0 && dist[1] == 0 && dist[2] == 0) {
	        	break;
	        }

	        else if (dist[0] == 0 || dist[1] == 0 || dist[2] == 0) {
	        	System.out.println("wrong");
	        }
	        else {
	        	Arrays.sort(dist);
		        if( Math.pow(dist[0], 2) + Math.pow(dist[1], 2) == Math.pow(dist[2], 2)) {
		        	System.out.println("right");
		        }
		        else {
		        	System.out.println("wrong");
		        }
	        }
	        st = new StringTokenizer(br.readLine(), " ");
        }
	}
}

