function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let numberOfBlocks = Math.abs(destination - start);
    let totalDistance = numberOfBlocks * 264;

    if (totalDistance < 400) {
        return 0;
    } else if (totalDistance > 400 && totalDistance <= 2000) {
            totalDistance = totalDistance - 400;
            return totalDistance * .02;
    } else if (totalDistance >= 2001 && totalDistance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}