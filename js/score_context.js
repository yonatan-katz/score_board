exports.score_context = function() {
    return { 
            datasets:["ds1","ds2","ds3","ds4","ds5","ds6","ds7"],
            days: [
                {   
                day:"day1",            
                projects: [
                    {project:"project01",l2: [0.9,0.92,0.93,0.9,0.92,0.93,0.6],
                    win_loss:0.8,
                    model_median_vs_lin:1.2
                    },
                    {project:"project02",l2: [0.1,0.3,0.8,0.7,0.91,0.92,0.61],
                    win_loss:0.6,
                    model_median_vs_lin:1.5
                    }
                    ]
                 },
                 {   
                    day:"day2",            
                    projects: [
                    {project:"project01",l2: [0.9,0.92,0.93,0.9,0.92,0.93,0.6],
                    win_loss:0.8,
                    model_median_vs_lin:1.3
                    },
                    {project:"project02",l2: [0.1,0.3,0.8,0.7,0.91,0.92,0.61],
                    win_loss:0.6,
                    model_median_vs_lin:1.1
                    }
                    ]
                 }
       ]    
   }
}
