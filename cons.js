class String{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.004,
            length: 4   ,
        }
        this.pointA = pointA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){

        if(this.sling.bodyB){

        
            var pointA = this.pointA;
            var bodyB = this.sling.bodyB.position;
            push();
            
            fill("black");
            stroke("black");
            strokeWeight(3);
            line(pointA.x,pointA.y,bodyB.x,bodyB.y);
            pop();
        }

        }

        attach(body){
            this.sling.bodyB = body;
        }
        
        fly(){
            this.sling.bodyB = null;
        }
        
    }
    
